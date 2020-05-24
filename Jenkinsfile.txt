pipeline {
    agent any
    stages {
    stage('Preparation') { // for display purposes
            steps {
              // clean out the workspace
              cleanWs()
            }
        }        
        
        stage('Install node modules'){
            steps{
                // install dependencies as described in the package.json
                sh 'npm install'
            }
        }
        
        stage('Start New Server!') {
            steps{
	    		// to create server
                    sh 'node index.js'
                
           	 }
        	}

		stage('echoing'){
		steps{
		echo "Hello world";
			}
			}
    }
}
