import { ItemsNavbar } from "../ItemsNavbar/ItemsNavbar"

ItemsNavbar

export const Navbar = () => {
  return (
    <nav>
            <ul>
                <ItemsNavbar text = "Inicio"/>
                <ItemsNavbar text = "¿Quien Soy"/>
                <ItemsNavbar text = "Contactame"/>
                <ItemsNavbar text = "Proyectos"/>
                
            </ul>
        </nav>
  )
}
