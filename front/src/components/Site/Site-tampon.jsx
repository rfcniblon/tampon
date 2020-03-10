import React from "react";
import '../Site/Site-tampon.css';
import '../Site/owl.carousel.min.css';
import '../Site/themify-icons.css';
//import '../Site/bootstrap.min.css';

class SiteTampon extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (

            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <nav className="navbar navbar-dark navbar-expand-lg">
                                <a className="navbar-brand" href="index.html"><img src="images/LogoSite2.png" className="img-fluid" alt="logo" /></a> <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation"> <span className="navbar-toggler-icon" /> </button>
                                <div className="collapse navbar-collapse" id="navbar">
                                    <ul className="navbar-nav ml-auto">
                                        <li className="nav-item"> <a className="nav-link active" href="#home">ACCUEIL <span className="sr-only">(current)</span></a> </li>
                                        <li className="nav-item"> <a className="nav-link" href="#services">SERVICE DE VENTILATION</a> </li>
                                        <li className="nav-item"> <a className="nav-link" href="#packs">PACKS</a> </li>
                                        <li className="nav-item"> <a className="nav-link" href="#produits">PRODUITS</a>
                                        </li><li className="nav-item"> <a className="nav-link" href="#prix">PRIX</a> </li>
                                        <li className="nav-item"> <a className="nav-link" href="#faq">FAQ</a> </li>
                                        <li className="nav-item"> <a className="nav-link" href="#">CONTACT</a> </li>
                                        {/* <li class="nav-item"><a href="#" class="btn btn-outline-light my-3 my-sm-0 ml-lg-3">Download</a></li> */}
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>

                {/*----------------- HEADER ---------------------*/}
                <header className="bg-gradient" id="home">
                    <div className="container mt-5 ">
                        <h1>Pilotez la ventilation de vos céréales en toute simplicité !!!</h1>
                        <p className="tagline"> Avec les offres FarmViz, suivre, gérer et optimiser sa ventilation devient un jeu d'enfants au quotidien.
              </p>
                        <br />
                    </div>
                    <div className="container mt-5">
                        <div className="row">
                            <div className="col-md-6 text-right">
                                <p className="taglinePrecommande">PRECOMMANDEZ</p>
                                <p className="taglinePrecommandeL2">Votre PACK MOBILE</p>
                                <p className="taglinePrecommandeL3">Sonde inox de thermométrie intelligente</p>
                                <div className="List">
                                    <ul dir="rtl" className="list-unstyled1 ">
                                        <li><a> Une sonde inox mobile de thermométrie</a></li>
                                        <li><a>Une application mobile</a></li>
                                        <li><a>Service Client</a></li>
                                        <li><a>Garantie 1 an</a></li>
                                    </ul>
                                </div>
                                <p className="taglinePrecommandeL4">OFFRE DE LANCEMENT*</p>
                                <span className="priceTop">149€<sub>/<del>199€</del></sub></span>
                                <p><a className="nav-link1" href="#">Découvrir</a><a href="#" className="btn btn-outline-light my-3 my-sm-0 ml-lg-3">PRECOMMANDER</a>
                                </p><p className="taglineInfo">*Offre de lancement valable du 24/02/2020 au 31/05/2020 - Limitée à 1 pack par exploitation agricole - voir conditions générales </p>
                            </div>
                            <div className="img-holder col-md-6">
                                <img src="images/iphonex.png" alt="iphone" className="img-fluid" />
                            </div>
                        </div>
                    </div>
                </header>
                {/*----------------- Présentation ventilation ---------------------*/}
                <div className="service" id="services">
                    <div className="container mt-6">
                        <div className="row">
                            <div className="col-md-7 text-left">
                                <h2>SERVICE DE PILOTAGE INTELLIGENT DE VENTILATION</h2>
                                <p>Pilotez et gérez la ventilation de vos stockages en toute simplicité avec le
                    service FarmViz.</p>
                                <p className="taglineInfo1">*Offre de lancement valable du 24/02/2020 au 31/05/2020 - Limitée à 1 pack par exploitation agricole - voir conditions générales </p>
                                <p className="text-right"> <a href="#" className="btn btn-primary">Contactez-nous</a></p>
                            </div>
                            <div className="col-md-4">
                                <img src="images/iphonex.png" alt="iphone" className="img-fluid" />
                            </div>
                        </div>
                    </div>
                </div>
                {/*----------------- Fonctionnalités ---------------------*/}
                <div className="section light-bg">
                    <div className="container">
                        <div className="section-title">
                            <h3>Des fonctionnalités multiples conçues pour vous apporter du confort au quotidien
                </h3>
                        </div>
                        <div className="row">
                            <div className="col-12 col-lg-4">
                                <div className="card features">
                                    <div className="card-body">
                                        <div className="media">
                                            <span className="ti-map-alt gradient-fill ti-3x mr-3" />
                                            <div className="media-body">
                                                <h4 className="card-title">Multi-sites, stockages, utilisateurs </h4>
                                                <p className="card-text">Vous avez plusieurs sites de stockages à gérer ? Vous êtes plusieurs à gérer un même site ? Aucun problème ! Retrouvez l'historique de l'activité et visualisez l'ensemble de vos sites en un clic. </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-lg-4">
                                <div className="card features">
                                    <div className="card-body">
                                        <div className="media">
                                            <span className="ti-thumb-up gradient-fill ti-3x mr-3" />
                                            <div className="media-body">
                                                <h4 className="card-title">Economies</h4>
                                                <p className="card-text">Gagnez du temps avec le suivi de températures des céréales et l'activation/désactivation de vos moteurs à distance où que vous soyez. Gagnez de l'argent en ventilant efficacement. </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-lg-4">
                                <div className="card features">
                                    <div className="card-body">
                                        <div className="media">
                                            <span className="ti-timer gradient-fill ti-3x mr-3" />
                                            <div className="media-body">
                                                <h4 className="card-title">Temps réel</h4>
                                                <p className="card-text">Suivez en temps réel la thermométrie et l'hygrométrie de vos céréales, ainsi que l'activité de vos ventilateurs. </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <br />
                        <div className="row">
                            <div className="col-12 col-lg-4">
                                <div className="card features">
                                    <div className="card-body">
                                        <div className="media">
                                            <span className="ti-target gradient-fill ti-3x mr-3" />
                                            <div className="media-body">
                                                <h4 className="card-title">Optimisation</h4>
                                                <p className="card-text">Réduisez vos temps de ventilation en activant ou désactivant vos moteurs au bon moment. Bénéficiez du pilotage automatique pour une ventilation efficace à toute heure du jour ou de la nuit.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-lg-4">
                                <div className="card features">
                                    <div className="card-body">
                                        <div className="media">
                                            <span className="ti-medall gradient-fill ti-3x mr-3" />
                                            <div className="media-body">
                                                <h4 className="card-title">Traçabilité</h4>
                                                <p className="card-text"> Assurez la traçabilité de vos temps de ventilation et de la température de vos céréales et valorisez vos céréales en prétendant à l'obtention de labels ou de certifications. </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-lg-4">
                                <div className="card features">
                                    <div className="card-body">
                                        <div className="media">
                                            <span className="ti-info-alt gradient-fill ti-3x mr-3" />
                                            <div className="media-body">
                                                <h4 className="card-title">Notifications et alertes</h4>
                                                <p className="card-text">Soyez informé et alerté du meilleur moment pour ventiler et de l'atteinte de vos objectifs. </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <br />
                        <div className="row">
                            <div className="col-12 col-lg-4">
                                <div className="card features">
                                    <div className="card-body">
                                        <div className="media">
                                            <span className="ti-alert gradient-fill ti-3x mr-3" />
                                            <div className="media-body">
                                                <h4 className="card-title">Gestion des risques</h4>
                                                <p className="card-text">Agissez en préventif et non en curatif. Allez au devant des risques sanitaires (maladies, insectes) et des risques d'incendie (fermentation exothermique). </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-lg-4">
                                <div className="card features">
                                    <div className="card-body">
                                        <div className="media">
                                            <span className="ti-rocket gradient-fill ti-3x mr-3" />
                                            <div className="media-body">
                                                <h4 className="card-title">Valorisation de votre expertise</h4>
                                                <p className="card-text"> Décidez d'activer ou non la ventilation en fonction de nos recommandations. </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-lg-4">
                                <div className="card features">
                                    <div className="card-body">
                                        <div className="media">
                                            <span className="ti-link gradient-fill ti-3x mr-3" />
                                            <div className="media-body">
                                                <h4 className="card-title">Lien entre les acteurs</h4>
                                                <p className="card-text">Augmentation des interactions entre les agriculteurs stockeurs, les coopératives et les négoces. </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* // end .section */}
                {/*----------------- Call to Action ---------------------*/}
                <div className="client-logos my-5 call-to-action">
                    <div className="container text-center">
                        <h3>Je suis intéressé</h3>
                      <p>  The one and only solution for any kind of mobila app landing needs. Just change the screenshots and texts and you are good to go.</p>
                        <p><span className="ti-headphone-alt mr-2" /> <a href="tel:+33234401467">02.34.40.14.67</a><a href="#" className="btn btn-primary  my-6 my-sm-0 ml-lg-6">PRECOMMANDER</a>
                        </p>
                    </div>
                </div>
                {/*
      <div class="section">
  
          <div class="container">
              <div class="row">
                  <div class="col-lg-6 offset-lg-6">
                      <div class="box-icon"><span class="ti-mobile gradient-fill ti-3x"></span></div>
                      <h2>Discover our App</h2>
                      <p class="mb-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati vel exercitationem eveniet vero maxime ratione </p>
                      <a href="#" class="btn btn-primary">Read more</a>
                  </div>
              </div>
              <div class="perspective-phone">
                  <img src="images/perspective.png" alt="perspective phone" class="img-fluid">
              </div>
          </div>
  
      </div> */}
                {/* // end .section */}
                {/*----------------- PACK ---------------------*/}
                <div className="section light-bg" id="packs">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8 d-flex align-items-center">
                                <ul className="list-unstyled ui-steps1">
                                    <li className="media">
                                        <div className="media-body">
                                            <h5>PACK MOBILE</h5>
                                            <p>Effectuez un sondage manuel de la thermométrie et de l'hygrométrie de vos stockages. </p>
                                            <ul className="list-square ">
                                                <li><a>1 sonde inox mobile de thermométrie</a></li>
                                                <li><a>Application mobile</a></li>
                                                <li><a>Service client</a></li>
                                                <li><a>Garantie 1 an</a></li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className="media my-4">
                                        <div className="media-body">
                                            <h5>PACK THERMOMETRIE</h5>
                                            <p>Obtenez un suivi en temps réel et en continu de la thermométrie et de l'hygrométrie de vos stockages.</p>
                                            <ul className="list-square ">
                                                <li><a>Sondes inox semi-permanentes de thermométrie</a></li>
                                                <li><a>Application mobile</a></li>
                                                <li><a>Service client</a></li>
                                                <li><a>Boîtier de pilotage</a></li>
                                                <li><a>Garantie 1 an</a></li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className="media">
                                        <div className="media-body">
                                            <h5>PACK VENTILATION</h5>
                                            <p>Obtenez un suivi en temps réel et en continu de la thermométrie et de l'hygrométrie de vos stockages et pilotez votre ventilation de manière optimale en déclenchant vos moteurs à distance soit : manuellement via l'application mobile soit automatiquement via le boîtier de pilotage intelligent FarmViz. </p>
                                            <ul className="list-square ">
                                                <li><a>Sondes inox semi-permanentes de thermométrie</a></li>
                                                <li><a>Application mobile</a></li>
                                                <li><a>Service client</a></li>
                                                <li><a>Boîtier de pilotage</a></li>
                                                <li><a>Actionneur moteur</a></li>
                                                <li><a>Garantie 1 an</a></li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-4">
                                <img src="images/Hub.png" alt="iphone" className="img-fluid" />
                            </div>
                        </div>
                    </div>
                </div>
                {/* // end .section */}
                {/*----------------- PRODUITS ---------------------*/}
                <div className="section" id="produits">
                    <div className="container">
                        <div className="section-title">
                            {/*  <small>FEATURES</small> */}
                            <h3>LA TECHNOLOGIE FARMVIZ</h3>
                        </div>
                        <ul className="nav nav-tabs nav-justified" role="tablist">
                            <li className="nav-item">
                                <a className="nav-link active" data-toggle="tab" href="#communication">L'application</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-toggle="tab" href="#schedule">Le boîtier de pilotage</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-toggle="tab" href="#messages">L'actionneur moteur</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-toggle="tab" href="#livechat"> La sonde de thermométrie</a>
                            </li>
                        </ul>
                        <div className="tab-content">
                            <div className="tab-pane fade show active" id="communication">
                                <div className="d-flex flex-column flex-lg-row">
                                    <img src="images/graphic.png" alt="graphic" className="img-fluid rounded align-self-start mr-lg-5 mb-5 mb-lg-0" />
                                    <div>
                                        <h2>L'application FarmViz</h2>
                                        <p className="lead">Une seule application pour suivre votre thermométrie et piloter votre ventilation où que vous soyez. </p>
                                        <p>Grâce à votre application garder un œil sur la température de vos multiples stockages depuis votre tracteur, votre bureau ou votre canapé ! Vous pouvez également activer ou désactiver vos moteurs de ventilation à distance en un clic ou passez en pilotage automatique intelligent de vos stockages.
                      </p>
                                        <li><p>Expérience utilisateur forte
                        </p></li>
                                        <li><p>Intuitive et transparente
                        </p></li>
                                        <li><p>Plusieurs niveaux d'informations avec la visualisation globale multi-sites puis par site et par stockage
                        </p></li>
                                        <li><p>Multi-utilisateurs
                        </p></li>
                                        <li><p>Accessible sur tous les supports (smartphone, tablette, ordinateur)
                        </p></li>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="schedule">
                                <div className="d-flex flex-column flex-lg-row">
                                    <div>
                                        <h2>Boîtier de pilotage intelligent</h2>
                                        <p className="lead">Un boîtier qui centralise les informations et qui vous informe. </p>
                                        <p> Le boîtier de pilotage est fixé en hauteur dans votre bâtiment.
                      </p>
                                        <p>Il centralise les relevés de température et d'hygrométrie envoyés par les sondes. Grâce aux notifications et aux alertes que le boîtier vous envoie par sms en temps réel, prenez les meilleures décisions et soyez informé d'un risque ou d'un dysfonctionnment.
                      </p>
                                        <p> Le boîtier sécurise également vos données.
                      </p>
                                    </div>
                                    <img src="images/graphic.png" alt="graphic" className="img-fluid rounded align-self-start mr-lg-5 mb-5 mb-lg-0" />
                                </div>
                            </div>
                            <div className="tab-pane fade" id="messages">
                                <div className="d-flex flex-column flex-lg-row">
                                    <img src="images/graphic.png" alt="graphic" className="img-fluid rounded align-self-start mr-lg-5 mb-5 mb-lg-0" />
                                    <div>
                                        <h2>Actionneur moteur</h2>
                                        <p className="lead">Plus besoin de vous déplacer sur site, l'actionneur moteur s'occupe de tout ! </p>
                                        <p> L'actionneur moteur se fixe sur votre moteur. Il s'installe facilement sur votre matériel existant.
                      </p>
                                        <p>L'actionneur moteur déclenche ou stoppe le moteur de ventilation. Il permet de piloter la ventilation à distance.
                      </p>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="livechat">
                                <div className="d-flex flex-column flex-lg-row">
                                    <div>
                                        <h2>Sonde de thermométrie</h2>
                                        <p className="lead">L'association de la rusticité et de la technologie </p>
                                        <p> La sonde inox de thermométrie mesure en temps réel la température et l'hygrométrie à l'intérieur du stockage et à la surface du tas.
                      </p>
                                        <p> La sonde inox de thermométrie FarmViz a fait l'objet d'une demande de dépôt de brevet.
                      </p>
                                    </div>
                                    <img src="images/graphic.png" alt="graphic" className="img-fluid rounded align-self-start mr-lg-5 mb-5 mb-lg-0" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* // end .section */}
                {/*-----------------GALLERIE D'IMAGES ---------------------*/}
                <div className="section light-bg" id="gallery">
                    <div className="container">
                        <div className="section-title">
                            <small>GALLERIE</small>
                            <h3>Découvrez FarmViz sur le terrain</h3>
                        </div>
                        <div className="img-gallery owl-carousel owl-theme">
                            <img src="images/screen1.jpg" alt="image" />
                            <img src="images/screen2.jpg" alt="image" />
                            <img src="images/screen3.jpg" alt="image" />
                            <img src="images/screen1.jpg" alt="image" />
                        </div>
                    </div>
                </div>
                {/* // end .section */}
                {/*----------------- PRICING ---------------------*/}
                 <div className="section" id="prix">
                    <div className="container">
                        <div className="section-title">
                            <small>PRIX</small>
                            <h3>OFFRE DE LANCEMENT</h3>
                            <small>Offre de lancement valable du 24/02/2020 au 31/05/2020 - voir conditions générales</small>
                        </div>
                        <div className="card-deck">
                            <div className="card pricing">
                                <div className="card-head ui-steps">
                                    <h3 className="text-primaryWhite">PACK<br />THERMOMETRIE</h3>
                                    <span className="priceOffre">-10%<sub> sur votre Pack</sub></span>
                                </div>
                                <ul className="list-group list-group-flush">
                                    <p> Suivi en temps réel et en continu de la thermométrie et de l'hygrométrie
                    </p>
                                    <div className="list-group-item">Sondes inox semi-permanentes de thermométrie</div>
                                    <div className="list-group-item">Application mobile</div>
                                    <div className="list-group-item">Service client</div>
                                    <div className="list-group-item">Boîtier de pilotage</div>
                                    <div className="list-group-item">Garantie 1 an</div>
                                </ul>
                                <div className="card-body">
                                    <a href="#" className="btn btn-primary btn-lg btn-block">Demande de devis</a>
                                </div>
                            </div>
                            <div className="card pricing popular">
                                <div className="card-head ui-steps">
                                    <h3 className="text-primaryWhite">PACK<br />MOBILE</h3>
                                    <span className="priceOffre">149€<sub>/<del>199€</del></sub></span>
                                </div>
                                <ul className="list-group list-group-flush">
                                    <p> Relevé manuel de la thermométrie et de l'hygrométrie
                    </p>
                                    <div className="list-group-item">1 sonde inox mobile de thermométrie</div>
                                    <div className="list-group-item">Application mobile</div>
                                    <div className="list-group-item">Service client</div>
                                    <div className="list-group-item">Garantie 1 an</div>
                                </ul>
                                <div className="card-body">
                                    <a href="#" className="btn btn-primary btn-lg btn-block">PRECOMMANDER</a>
                                </div>
                            </div>
                            <div className="card pricing">
                                <div className="card-head ui-steps">
                                    <h3 className="text-primaryWhite">PACK<br />VENTILATION</h3>
                                    <span className="priceOffre">-10%<sub> sur votre Pack</sub></span>
                                </div>
                                <ul className="list-group list-group-flush">
                                    <p> Suivi en temps réel et en continu de la thermométrie et de l'hygrométrie et pilotage de la ventilation
                    </p>
                                    <div className="list-group-item">Sondes inox semi-permanentes de thermométrie</div>
                                    <div className="list-group-item">Application mobile</div>
                                    <div className="list-group-item">Service client</div>
                                    <div className="list-group-item">Boîtier de pilotage</div>
                                    <div className="list-group-item">Actionneur moteur</div>
                                    <div className="list-group-item">Garantie 1 an</div>
                                </ul>
                                <div className="card-body">
                                    <a href="#" className="btn btn-primary btn-lg btn-block">Demande de devis</a>
                                </div>
                            </div>
                        </div> 
                        {/* // end .pricing */}
                     </div>
                </div> 
                {/* // end .section */}
                {/*----------------- FAQ ---------------------*/}
                <div className="section pt-0 light-bg" id="faq">
                    <div className="container">
                        <div className="section-title">
                            <small>FAQ</small>
                            <h3>Questions fréquemment posées</h3>
                        </div>
                        <div className="row pt-4">
                            <div className="col-md-6">
                                <h4 className="mb-3">Puis-je essayer avant d'acheter?</h4>
                                <p className="light-font mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rutrum, urna eu pellentesque pretium, nisi nisi fermentum enim, et sagittis dolor nulla vel sapien. Vestibulum sit amet mattis ante. </p>
                                <h4 className="mb-3">Avez-vous un contrat?</h4>
                                <p className="light-font mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rutrum, urna eu pellentesque pretium, nisi nisi fermentum enim, et sagittis dolor nulla vel sapien. Vestibulum sit amet mattis ante. </p>
                                <h4 className="mb-3">Je me situe dans une zone blanche est-ce un problème ?</h4>
                                <p className="light-font mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rutrum, urna eu pellentesque pretium, nisi nisi fermentum enim, et sagittis dolor nulla vel sapien. Vestibulum sit amet mattis ante. </p>
                            </div>
                            <div className="col-md-6">
                                <h4 className="mb-3">Puis-je changer mon plan plus tard?</h4>
                                <p className="light-font mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rutrum, urna eu pellentesque pretium, nisi nisi fermentum enim, et sagittis dolor nulla vel sapien. Vestibulum sit amet mattis ante. </p>
                                <h4 className="mb-3">Quels modes de paiement acceptez-vous?</h4>
                                <p className="light-font mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rutrum, urna eu pellentesque pretium, nisi nisi fermentum enim, et sagittis dolor nulla vel sapien. Vestibulum sit amet mattis ante. </p>
                                <h4 className="mb-3">Quel est la durée de l'engagement ?</h4>
                                <p className="light-font mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rutrum, urna eu pellentesque pretium, nisi nisi fermentum enim, et sagittis dolor nulla vel sapien. Vestibulum sit amet mattis ante. </p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* // end .section */}
                {/*----------------- PARTENAIRES ---------------------*/}
                <div className="client-logos my-5">
                    <div className="container text-center">
                        <h3>ILS NOUS SOUTIENNENT</h3>
                        <p>The one and only solution for any kind of mobila app landing needs. Just change the screenshots and texts and you are good to go.</p>
            <p> <a href="#" class="btn btn-light">Etre </a>  <a href="#" class="btn btn-primary">Demande de devis</a></p>
        
                    </div>
                </div>
                {/*----------------- FOOTER ---------------------*/}
                <div className="light-bg py-5" id="contact">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 text-center text-lg-left">
                                <p className="mb-2"> FARMVIZ SAS</p>
                                <p className="mb-2"> <span className="ti-location-pin mr-2" /> 50 Rue Chanzy, 28000 CHARTRES</p>
                                <div className=" d-block d-sm-inline-block">
                                    <p className="mb-2">
                                        <span className="ti-email mr-2" /> <a className="mr-4" href="mailto:support@mobileapp.com">contact@farmviz.fr</a>
                                    </p>
                                </div>
                                <div className="d-block d-sm-inline-block">
                                    <p className="mb-0">
                                        <span className="ti-headphone-alt mr-2" /> <a href="tel:51836362800">+33(0)2.34.40.14.67</a>
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="social-icons">
                                    <a href="#"><span className="ti-facebook" /></a>
                                    <a href="#"><span className="ti-twitter-alt" /></a>
                                    <a href="#"><span className="ti-linkedin" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* // end .section */}
                <footer className="my-5 text-center">
                    {/* Copyright removal is not prohibited! */}
                    <p className="mb-2"><small>COPYRIGHT © 2019-2020. ALL RIGHTS RESERVED. BY <a href="https://farmviz.fr">FARMVIZ SAS</a></small></p>
                </footer>
                {/* jQuery and Bootstrap */}
                {/* Plugins JS */}
                {/* Custom JS */}
            </div>
        );
    }
}

export default SiteTampon;