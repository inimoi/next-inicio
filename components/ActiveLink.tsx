
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { FC } from 'react'

import styles from "./ActiveLink.module.css";

interface Props {
    text: string;
    href: string;
}

const ActiveLink : FC<Props> = ({ href, text}) => {

    const { asPath } = useRouter();
    return (
        <Link legacyBehavior href={ href }>
            
            <a className = {asPath === href ? styles.linkActivo : styles.noLinkActivo }>{ text }</a>
        </Link>
  )
}

export default ActiveLink
