import { useState } from "react"
import styles from "@/styles/Links.module.css"
import { NextPage } from "next"

const Links: NextPage = () => {
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
    

  return(
    <div className={styles.links}>
      <h3>Twitter:</h3> 
      <a href="https://twitter.com/theTaliaCarver">@theTaliaCarver</a>

    </div>

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
  )
}

export default Links