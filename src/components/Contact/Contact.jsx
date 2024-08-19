import React from 'react';

import { LogosFacebook, SkillIconsGithubLight, SkillIconsInstagram, SkillIconsLinkedin } from '../../icons/Icons';

//const iconos = ["logos:facebook", "logos:linkedin", "logos:instagram"];
/*
<ul>
{iconos.map((icon) => <Icon icon={icon} />)}
</ul> 
*/

function Contact() {
    return (
        <>
            <div className='navigation-contact'>
                <ul className='img-contact'>
                    <li>
                        <SkillIconsLinkedin width="50px" height="50px" />
                    </li>
                    <li>
                        <LogosFacebook width="50px" height="50px" />
                    </li>
                    <li>
                        <SkillIconsGithubLight width="50px" height="50px" />
                    </li>
                    <li>
                        <SkillIconsInstagram width="50px" height="50px" />
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Contact