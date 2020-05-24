pipeline {
    agent any
    environment{
        JENKINS_NODE_COOKIE = 'dontkillmeplease'
        PORT=5000
}

    stages {
    stage('Preparation') { // for display purposes
            steps {
              // clean out the workspace
              cleanWs()
            }
        }        
        stage('Download') {
           steps {
              // Download code from a GitHub repository
              // branch: the branch that you want to build
              // credentialsId: the ID of the credentials for your GitLab repo that is being managed by Jenkins
              // url: url to your repo
              git branch: 'master', url: 'https://github.com/AnmolAD1997/sample.git'
           }
        }

           
        stage('Install node modules'){
            steps{
                // install dependencies as described in the package.json
                sh 'npm install'
            }

        }
        stage('Destroy Old Server') {
            steps {
                script {
                    try {
                        // kill any running instances of the app if applicable
                        sh 'kill $(lsof -t -i:PORT)'
                    } catch (all) {
                        // if it fails that should mean a server wasn't already running
                        echo 'No server was already running'
                    }
                }
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
