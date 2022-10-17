import { IHeaderProps } from "../../Interfaces/Header.interface"

export const Header = ({title}: IHeaderProps) => {
    return (
        <header className="header">
            <div className="container">
                <p className="header_title">{title}</p>
            </div>
        </header>
    )
}