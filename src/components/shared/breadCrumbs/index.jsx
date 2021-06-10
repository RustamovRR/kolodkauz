import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Breadcrumbs } from '@material-ui/core'
import { useBreadCrumbStyles } from './breadCrumbStyles'
import { ContextRoot } from '../../../contexts'

export default function BreadCrumbs({ items }) {
    const classes = useBreadCrumbStyles()
    const { trans, setTrans } = useContext(ContextRoot)

    const last = items.length - 1

    return (
        <div>
            <Breadcrumbs className={classes.navigation}>
                {
                    items.map(({ link, titleRu, titleUz }, key) => (
                        key === last ? (
                            <p >
                                {trans === 'ru' ? titleRu : titleUz}
                            </p>
                        ) : (
                            <Link to={link} className={classes.link}>
                                {trans === 'ru' ? titleRu : titleUz}
                            </Link>
                        )
                    ))
                }
                {/* <Link to="/" className={classes.link}>
                    {trans === 'ru' ? `Автотовары` : `Avtotovarlar`}
                </Link> */}
            </Breadcrumbs>
        </div>
    )
}
