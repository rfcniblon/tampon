import React, { Component } from 'react';
import Recaptcha from 'react-google-invisible-recaptcha';
import './Css/Contact.css';
const SERVER_ADDRESS = process.env.REACT_APP_SERVER_ADDRESS;

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: '',
      lastname: '',
      email: '',
      phonenumber: '',
      message: '',
      isSent: false,
      loading: false,
      formErrors: {
        email: '',
        phonenumber: '',
        lastname: '',
        firstname: '',
        message: ''
      },
      lastnamevalid: false,
      firstnamevalid: false,
      emailvalid: false,
      messagevalid: false,
      formvalid: false,
      captcha: false,
      contactData: [],
      phonetel: ''
    };
  }
//   componentDidMount() {
//     this.getContact();
//   }

  // Récupération des données de la table contact
//   getContact = () => {
//     fetch(SERVER_ADDRESS + '/contact', {
//       method: 'GET'
//     })
//       .then(response => response.json())
//       .then(data => {
//         let noDots = data[0].phone.split('.').join('');
//         let removeFirstCharacter = 'tel:+33' + noDots.substring(1);
//         this.setState({ phonetel: removeFirstCharacter });
//         this.setState({ contactData: data[0] });
//       })
//       .then(data => {});
//   };

  // rentre les données dans le state
  handleChangeContact = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({ [name]: value }, () => {
      this.validateField(name, value);
    });
  };

  // vérifie les données entrées
  validateField(fielname, value) {
    let fieldValidationErrors = this.state.formErrors;
    let emailvalid = this.state.emailvalid;
    let lastnamevalid = this.state.lastnamevalid;
    let firstnamevalid = this.state.firstnamevalid;
    let messagevalid = this.state.messagevalid;

    switch (fielname) {
      case 'firstname':
        firstnamevalid = value.length > 0;

        fieldValidationErrors.firstname = firstnamevalid
          ? ''
          : '* Champ requis.';
        break;
      case 'lastname':
        lastnamevalid = value.length > 0;
        fieldValidationErrors.lastname = lastnamevalid ? '' : '* Champ requis.';
        break;
      case 'email':
        emailvalid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailvalid ? '' : '* email non valide.';
        break;
      case 'message':
        messagevalid = value.length > 0;
        fieldValidationErrors.message = messagevalid ? '' : '* Champ requis.';
        break;
      default:
        break;
    }
    this.setState(
      {
        formErrors: fieldValidationErrors,
        emailvalid: emailvalid,
        firstnamevalid: firstnamevalid,
        lastnamevalid: lastnamevalid,
        messagevalid: messagevalid
      },
      this.validateForm
    );
  }

  validateForm() {
    this.setState({
      formvalid:
        this.state.emailvalid &&
        this.state.lastnamevalid &&
        this.state.firstnamevalid &&
        this.state.messagevalid
    });
  }

  //début fonction
  handleContactSubmit = event => {
    event.preventDefault();
    //errors

    let fieldValidationError = this.state.formErrors;

    fieldValidationError.firstname = this.state.firstnamevalid
      ? ''
      : '* Champ requis.';

    fieldValidationError.lastname = this.state.lastnamevalid
      ? ''
      : '* Champ requis.';

    fieldValidationError.email = this.state.emailvalid
      ? ''
      : '* email non valide.';

    fieldValidationError.message = this.state.messagevalid
      ? ''
      : '* champs requis';

    this.setState({ formErrors: fieldValidationError });

    // execution du captcha
    this.recaptcha.execute();

    //fetch sendMail
  };

  // le captcha appelle cette fonction après vérification, on exécute onFetch('envoie de mail)
  onResolved = () => {
    this.setState({ captcha: true }, this.onFetch);
  };

  // envoi de mail
  onFetch = () => {
    if (
      this.state.lastnamevalid &&
      this.state.firstnamevalid &&
      this.state.emailvalid &&
      this.state.messagevalid
    ) {
      const { phonenumber, lastname, email, firstname, message } = this.state;

      if (this.state.captcha) {
        this.setState({ loading: true });
        fetch(SERVER_ADDRESS + '/contact', {
          method: 'POST',
          headers: new Headers({
            'Content-Type': 'application/json'
          }),
          body: JSON.stringify({
            firstname: firstname,
            lastname: lastname,
            email: email,
            phonenumber: phonenumber,
            message: message
          })
        }).then(res => {
          if (res.ok) {
            // message de confirmation
            this.setState({ isSent: true }, () => {
              setTimeout(() => {
                this.setState({ isSent: false });
              }, 5000);
            });

            // Reset

            this.setState({ loading: false });
            this.setState({ captcha: false });
            this.setState({ firstname: '' });
            this.setState({ lastname: '' });
            this.setState({ email: '' });
            this.setState({ message: '' });
            this.setState({ phonenumber: '' });
            return res.json();
          } else {
            return res.text().then(text => {
              throw new Error(text);
            });
          }
        });
      }
    }
  };

  //fin fonction

  render() {
    const { lastname, firstname, email, phonenumber, message } = this.state;
    return (
      <>
        <div>
          <div className="container_back_contact">
            <div className="space_contact"></div>

            {/* Contact Part */}
            <div className="d-flex justify-content-center col-12 mt-5">
              <section className="bloc_form p-0 col-12 col-sm-12 col-md-12 col-lg-10 col-xl-10">
                <div className="container-fluid">
                  <div className="container">
                    <div className="formBox">
                      <form onSubmit={this.handleContactSubmit}>
                        <div className="row">
                          <div className="col-sm-12 title_contact mb-5 mt-5">
                            <h1 className="title_form font-Courgette-contact">
                              Contact
                            </h1>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-sm-6">
                            <div className="inputBox focus">
                              <div className="inputText font-Courgette-contact">
                                Nom{' '}
                                <span>{this.state.formErrors.lastname}</span>
                              </div>
                              <input
                                type="text"
                                name="lastname"
                                value={lastname}
                                onChange={this.handleChangeContact}
                                className="input_form "
                              />
                            </div>
                          </div>
                          <div className="col-sm-6">
                            <div className="inputBox focus">
                              <div className="inputText font-Courgette-contact">
                                Prénom{' '}
                                <span>{this.state.formErrors.firstname}</span>
                              </div>
                              <input
                                type="text"
                                name="firstname"
                                value={firstname}
                                onChange={this.handleChangeContact}
                                className="input_form "
                              />
                            </div>
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-sm-6">
                            <div className="inputBox focus">
                              <div className="inputText font-Courgette-contact">
                                Email <span>{this.state.formErrors.email}</span>
                              </div>
                              <input
                                type="text"
                                name="email"
                                value={email}
                                onChange={this.handleChangeContact}
                                className="input_form"
                              />
                            </div>
                          </div>
                          <div className="col-sm-6">
                            <div className="inputBox focus">
                              <div className="inputText font-Courgette-contact">
                                Numéro de téléphone
                              </div>
                              <input
                                type="text"
                                name="phonenumber"
                                value={phonenumber}
                                onChange={this.handleChangeContact}
                                className="input_form"
                              />
                            </div>
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-sm-12">
                            <div className="inputBox focus">
                              <div className="inputText font-Courgette-contact">
                                Message{' '}
                                <span>{this.state.formErrors.message}</span>
                              </div>
                              <textarea
                                name="message"
                                value={message}
                                onChange={this.handleChangeContact}
                                className="input_form textarea_form"
                              ></textarea>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-sm-12 mb-5 button-text-contact">
                            <input
                              type="submit"
                              value={
                                this.state.loading
                                  ? 'Envoi en cours...'
                                  : 'Envoyer'
                              }
                              className="button_form"
                            />
                          </div>
                        </div>
                        <div id="Captcha">
                        <Recaptcha
                          ref={ref => (this.recaptcha = ref)}
                          sitekey="6LfSX9YUAAAAAHGi5gUy5NetwOCc0SQe_1YBK8vC"
                          onResolved={this.onResolved}
                        />
                          </div>
                        <div
                          className={
                            this.state.isSent ? 'alert alert-success' : 'd-none'
                          }
                        >
                          {this.state.isSent ? 'Message envoyé!' : ''}
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Contact;
