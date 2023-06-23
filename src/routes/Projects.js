import 'Default.css';
import Project from 'components/Project'

function Projects() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>projects</h1>
        {/* <p>i made an app once!</p> */}

        <Project title="Privacy Masking"
                 src="ensemblepic"
                 line1="Using GANs and facial landmarks to preserve user privacy"
                 line2="by rendering photos illegible to facial detection algorithms."
                 line3="computer vision, python, opencv, ffmpeg"
                 link="https://github.com/conanlu/ensemble-perturbation"
                 linktext="github"
                 >

        </Project>
        <br></br>
        <Project title="ChordGAN"
                 src="chordganpic"
                 line1="Symbolic Music Style Transfer with Chroma Feature Extraction"
                 line2="Research presented at AIMC 2021, ISEF 2021"
                 line3="machine learning, python, GANs, tensorflow, keras"
                 link="https://conanlu.github.io/chordgan"
                 linktext="project site"
                 >

        </Project>
      </header>
      
    </div>
  );
}

export default Projects;
