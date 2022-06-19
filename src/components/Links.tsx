import React from "react"
import styles from "@/styles/Links.module.css"
import { GoLinkExternal } from 'react-icons/go'

const Links: React.FC = () => {
  return(
    <div className={styles.links}>
      <h2>Email: </h2> 
      <p>
        talia@carvervo.com
      </p>
      <h2>Catalogue of work:</h2> 
      <a 
        href="https://www.audible.com/search?searchNarrator=Talia+Carver">
          Audible<GoLinkExternal />
      </a>
      <h2>Twitter:</h2> 
      <a href="https://twitter.com/theTaliaCarver">
        @theTaliaCarver {<GoLinkExternal />}
      </a>
    </div>
  )
}
export default Links

// const [formData, setFormData] = useState(
//   {name: "", email: "", content: ""})

// function handleChange(event){
//   setFormData(prevFormData => {
//     return {
//       ...prevFormData,
//       [event.target.name]: event.target.value
//     }
//   })
// }

// function handleSubmit(event){
//   event.preventDefault()
// }


    // <form onSubmit={handleSubmit}>
    //   <label className="name">Name:
    //     <input 
    //       type="text" 
    //       placeholder="Name" 
    //       name="name"  
    //       onChange={handleChange}
    //       value={formData.name}
    //     />
    //   </label>
    //   <label className="email">Email:
    //     <input 
    //       type="text" 
    //       placeholder="Email Address" 
    //       name="email"
    //       onChange={handleChange}
    //       value={formData.email}
    //     />
    //   </label>
    //   <label className="content">Content:
    //     <textarea  
    //       placeholder="" 
    //       name="content"
    //       onChange={handleChange}
    //       value={formData.content}          
    //     />
    //   </label>
    //   <button type="submit">Send</button>
    // </form>
