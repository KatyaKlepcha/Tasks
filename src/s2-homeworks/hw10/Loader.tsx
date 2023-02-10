import s from './Loader.module.css'

export const Loader = () => <div className={s.loader}>
    <div className={s.inner + ' ' + s.one}></div>
    <div className={s.inner + ' ' + s.two}></div>
    <div className={s.inner + ' ' + s.three}></div>
</div>
