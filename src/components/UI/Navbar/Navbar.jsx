import { ItemsNavbar } from "../ItemsNavbar/ItemsNavbar"

ItemsNavbar

export const Navbar = () => {
  return (
    <nav className="">
            <ul className="flex justify-between p-8">
                <ItemsNavbar text = "Inicio"/>
                <ItemsNavbar text = "¿Quien Soy"/>
                <ItemsNavbar text = "Contactame"/>
                <ItemsNavbar text = "Proyectos"/>
                
            </ul>
        </nav>
  )
}
