import { Logo } from "../../components/Logo/Logo";
import { Navigation } from "../../components/Navigation/Navigation";
import { SearchForm } from "../../components/SearchForm/SearchForm";
import { Container } from "../Container/Container";
import cls from './Header.module.scss'

export const Header = () => (
    <header className={cls.header}>
        <Container className={cls.container}>
            <div className={cls.logo}>
                <Logo />
            </div>
            <div className={cls.search}>
                <SearchForm />
            </div>
            <div className={cls.navigation}>
                <Navigation />
            </div>
        </Container>
    </header>
)