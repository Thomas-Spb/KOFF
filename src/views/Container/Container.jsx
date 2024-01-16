import cls from "./Container.module.scss"

export const Container = (props) => props.className ? (
    <div className={`${cls.container} ${props.className}`}>
        {props.children}
    </div>
) : (<div className={cls.container}>
    {props.children}
</div>)