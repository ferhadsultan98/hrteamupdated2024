import React, { useEffect } from "react";
import "../vacancies/vacancies.css";
import VacanciesTwoSection from "./vacanciestwosection";
import ApplyForm from "./ApplyForm/ApplyForm";
import BackdropHeader from "../about/onesection/backdropheader";
import VacanciesBackImage from "../../assets/vacanciess.jpg";



let Vacancies = () => {
    return (
        <>
            <BackdropHeader
                backgroundImage={VacanciesBackImage}
                lastHeaderText="Vacancies"
            />
            <VacanciesTwoSection />
            <ApplyForm />
        </>
    )
}

export default Vacancies