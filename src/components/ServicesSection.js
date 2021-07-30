import React from 'react';

//Service Icons
import WebDesignImg from './../../imgs/serviceIcons/designs.png';
import AppDesignImg from './../../imgs/serviceIcons/iosANDandroid.png';
import MaintenanceImg from './../../imgs/serviceIcons/Layer 1.png';
import UpdateImg from './../../imgs/serviceIcons/multiple-design.png';


//# SERVICES SECTION
class ServicesSection extends React.Component {
    render() {
        return (
            <section className="servicesSection">
                <div className="servicesHeader">
                    <h2>Services</h2>
                </div>
                <div className="servicesList">
                    <div className="serviceBox">
                        <h3>Web Design</h3>
                        <div className="servicePara">
                            <p>Lorem Ipsume alnk alnslknaslknasndflans;dnfalsdjf;akjsdlfkja;skjf;a sjfa jsdf;kaj;ds fkja s;dfj a;skjdf ;akjs df;sLorem Ipsume alnk alnslknaslknasndflans;dnfalsdjf;akjsdlfkja;skjf;a sjfa jsdf;kaj;ds fkja s;dfj a;skjdf ;akjs df;s</p>
                        </div>
                        <div className="ServiceImage">
                            <img src={WebDesignImg} alt="Web Design Icon"/>
                        </div>
                    </div>
                    <div className="serviceBox">
                        <h3>App Design</h3>
                        <div className="servicePara">
                            <p>Lorem Ipsume alnk alnslknaslknasndflans;dnfalsdjf;akjsdlfkja;skjf;a sjfa jsdf;kaj;ds fkja s;dfj a;skjdf ;akjs df;sLorem Ipsume alnk alnslknaslknasndflans;dnfalsdjf;akjsdlfkja;skjf;a sjfa jsdf;kaj;ds fkja s;dfj a;skjdf ;akjs df;s</p>
                        </div>
                        <div className="ServiceImage">
                            <img src={AppDesignImg} alt=" App Design Icon"/>
                        </div>
                    </div>
                    <div className="serviceBox">
                        <h3>Maintenance</h3>
                        <div className="servicePara">
                            <p>Lorem Ipsume alnk alnslknaslknasndflans;dnfalsdjf;akjsdlfkja;skjf;a sjfa jsdf;kaj;ds fkja s;dfj a;skjdf ;akjs df;sLorem Ipsume alnk alnslknaslknasndflans;dnfalsdjf;akjsdlfkja;skjf;a sjfa jsdf;kaj;ds fkja s;dfj a;skjdf ;akjs df;s</p>
                        </div>
                        <div className="ServiceImage">
                            <img src={MaintenanceImg} alt=" Maintenance Icon"/>
                        </div>
                    </div>
                    <div className="serviceBox">
                        <h3>Updates</h3>
                        <div className="servicePara">
                            <p>Lorem Ipsume alnk alnslknaslknasndflans;dnfalsdjf;akjsdlfkja;skjf;a sjfa jsdf;kaj;ds fkja s;dfj a;skjdf ;akjs df;sLorem Ipsume alnk alnslknaslknasndflans;dnfalsdjf;akjsdlfkja;skjf;a sjfa jsdf;kaj;ds fkja s;dfj a;skjdf ;akjs df;s</p>
                        </div>
                        <div className="ServiceImage">
                            <img src={UpdateImg} alt="Icon"/>
                        </div>
                    </div>

                </div>
            </section>
        )
    }
}
export default ServicesSection;