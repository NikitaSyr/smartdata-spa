import c from "./MainLoader.module.css"

export const MainLoader = () => {
    return (
        <div className={c.lds_roller}>
            <div/>
            <div/>
            <div/>
            <div/>
            <div/>
            <div/>
            <div/>
            <div/>
        </div>
    )
}