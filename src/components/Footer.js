import React from 'react'
import { FacebookLogo ,InstagramLogo, LinkedinLogo} from 'phosphor-react'
export const Footer = () => {
    return (
        <><div className='fixed-bottom'>
            <ul class="nav justify-content-end">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#"><FacebookLogo size={32} /></a>
                </li>
                <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#"><InstagramLogo size={32} /></a>
                </li>
                <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#"><LinkedinLogo size={32} /></a>
                </li>
            </ul>
            </div>
        </>
    )
}
