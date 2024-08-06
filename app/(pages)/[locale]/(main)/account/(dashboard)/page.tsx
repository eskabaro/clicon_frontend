import type { Metadata } from 'next'
import { DashboardHeading } from './_ui/heading'
import styles from './_styles/Dashboard.module.scss'

export const metadata: Metadata = {
    title: 'Dashboard'
}

export default function Dashboard() {
    return (
        <section className={styles.wrapper}>
            <DashboardHeading />
        </section>
    )
}
