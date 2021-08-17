import React, { Component } from 'react';

//# Components
import ServiceBox from './ServiceBox';

import ServicesBackgroundImg from './../imgs/Services-header.png';

//IMGS
import WebDesignImg from './../imgs/serviceIcons/designs.png';
import AppDesignImg from './../imgs/serviceIcons/iosANDandroid.png';
import MaintenanceImg from './../imgs/serviceIcons/Layer 1.png';
import UpdateImg from './../imgs/serviceIcons/designs.png';


import './staticData/servicesList';
//TODO RENDER AN ARRAY to pass all servicesList data to the serviceBox component
// //# ServicesList 
const servicesList =[//array
        {//object
            serviceTitle: "Web Design",
            serviceDescP: "Lorem Ipsume alnk alnslknaslknasndflans;dnfalsdjf;akjsdlfkja;skjf;a sjfa jsdf;kaj;ds fkja s;dfj a;skjdf ;akjs df;sLorem Ipsume alnk alnslknaslknasndflans;dnfalsdjf;akjsdlfkja;skjf;a sjfa jsdf;kaj;ds fkja s;dfj a;skjdf ;akjs df;s",
            serviceIcon: WebDesignImg,
            serviceIconAlt: "Web Design Icon"
        },
        {
            serviceTitle: "App Design",
            serviceDescP: "Lorem Ipsume alnk alnslknaslknasndflans;dnfalsdjf;akjsdlfkja;skjf;a sjfa jsdf;kaj;ds fkja s;dfj a;skjdf ;akjs df;sLorem Ipsume alnk alnslknaslknasndflans;dnfalsdjf;akjsdlfkja;skjf;a sjfa jsdf;kaj;ds fkja s;dfj a;skjdf ;akjs df;s",
            serviceIcon: AppDesignImg,
            serviceIconAlt: "App Design Icon"
        },
        {
            serviceTitle: "Maintenance",
            serviceDescP: "Lorem Ipsume alnk alnslknaslknasndflans;dnfalsdjf;akjsdlfkja;skjf;a sjfa jsdf;kaj;ds fkja s;dfj a;skjdf ;akjs df;sLorem Ipsume alnk alnslknaslknasndflans;dnfalsdjf;akjsdlfkja;skjf;a sjfa jsdf;kaj;ds fkja s;dfj a;skjdf ;akjs df;s",
            serviceIcon: MaintenanceImg,
            serviceIconAlt: "Maintenance Icon"
        },
        {
            serviceTitle: "Updates",
            serviceDescP: "Lorem Ipsume alnk alnslknaslknasndflans;dnfalsdjf;akjsdlfkja;skjf;a sjfa jsdf;kaj;ds fkja s;dfj a;skjdf ;akjs df;sLorem Ipsume alnk alnslknaslknasndflans;dnfalsdjf;akjsdlfkja;skjf;a sjfa jsdf;kaj;ds fkja s;dfj a;skjdf ;akjs df;s",
            serviceIcon: UpdateImg,
            serviceIconAlt: "Update Icon"
        }
]

console.log(servicesList);
    
//todo RENDER a 4 serviceBoxes for each service
//# SERVICES SECTION
class ServicesSection extends Component{
    render() {
        return (
          
            <section className="servicesSection" >
                <div className="servicesHeader" style={{ backgroundImage: `url(${ServicesBackgroundImg})` }}>
                    <h2>Services</h2>
                </div>

                <div className="servicesList">
                    <ServiceBox servicesList={servicesList[0]} />
                    <ServiceBox servicesList={servicesList[1]} />
                    <ServiceBox servicesList={servicesList[2]} />
                    <ServiceBox servicesList={servicesList[3]} />
                    {/* //todo RENDER ALL servicesList through Map() */}
                    {/* {
                        this.props.servicesList.map((service) => {
                            <ServiceBox key={service}
                                servicesList={servicesList}
                                serviceTitle={servicesList.serviceTitle}
                                serviceDescP={servicesList.serviceDescP}
                                serviceIcon={servicesList.serviceIcon}
                                serviceIconAlt={servicesList.serviceIconAlt}

                            />
                        })
                    } */}
                    
                </div>
            </section>

        );
    }
}


export default ServicesSection;