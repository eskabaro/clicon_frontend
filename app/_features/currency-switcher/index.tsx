// 'use client'

// import { useState, type FC } from 'react'
// import { Popover } from '@/app/_entities/popover'
// import { Icon } from '@/app/_shared/ui/icon'
// import styles from './CurrencySwitcher.module.scss'

// export const CurrencySwitcher: FC = (props) => {
//     const [currentCurrency, setCurrentCurrency] = useState<string>('')

//     return (
//         <Popover {...props}>
//             <Popover.Button className={styles.button}>
//                 {currentCurrency}
//                 <Icon name='arrow-down' />
//             </Popover.Button>
//             <Popover.List>
//                 {Object.values(locales).map((locale) => {
//                     const isActive = currentLocale === locale

//                     return (
//                         <Popover.ListItem
//                             key={locale}
//                             value={locale}
//                             onClick={() => router.replace(redirectedPathname(locale))}
//                             setValue={setCurrentLocale}
//                             className={cn(styles.item, isActive && styles.active)}
//                         >
//                             <div className={styles['item-box']}>
//                                 <Icon name={locale} />
//                                 {t(locale)}
//                             </div>
//                             {isActive && <Icon name='check' />}
//                         </Popover.ListItem>
//                     )
//                 })}
//             </Popover.List>
//         </Popover>
//     )
// }
