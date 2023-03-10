import React, {useRef} from 'react';
import ReCAPTCHA from "react-google-recaptcha";

const siteKey = "6LeiK7skAAAAAPAfuSnVlcmWYT2fmpF2AdtsELNS";
const Captcha = ({onChange}) => {
    const recaptchaRef = useRef();

    return (
        <ReCAPTCHA
            sitekey={siteKey}
            ref={recaptchaRef}
            onChange={onChange}
            hl={"vi_VN"}
        />
    );
};

Captcha.propTypes = {};

export default Captcha;
