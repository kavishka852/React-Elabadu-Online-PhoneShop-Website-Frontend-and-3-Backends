import React from "react"; 


const HeaderComponent = () => {

    return (
        <div>
            <header>
            <nav className = "navbar navbar-expand-md navbar-dark bg-dark">
                    <div>
                        <a href = "http://localhost:3000/users" className = "navbar-brand">
                            User Management Application
                        </a>
                        <a href = "http://localhost:3000/products" className = "navbar-brand">
                            Product Management Application
                        </a>
                        <a href = "http://localhost:3000/ordered" className = "navbar-brand">
                        Order Management Application
                        </a>
                    </div>

                </nav>
            </header>
            
            
            </div>
           
    )
}
export default HeaderComponent