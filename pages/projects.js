import Head from 'next/head'
import Image from 'next/image'
import img from './../public/addRecipe.gif'

const Projects = () => {
  return (
    <>
    <Head>
      <title>Gil's Projects</title>
    </Head>
      <div className="projects">
        <h2>Projects</h2>
        <Image 
          src={img} 
          width={290}
          height={628}
          layout="fixed"/>
      </div>
    </>
   );
}
 
export default Projects;