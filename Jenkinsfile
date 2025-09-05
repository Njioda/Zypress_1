pipeline {
    agent any
    tools {
    nodejs "24.3.0"   //matches the name configured in Jenkins
    //nodejs "24.7.0"  // matches the name configured in Jenkins
  } 

    stages {
        stage('Checkout Code') {
            steps {
                git 'https://github.com/Njioda/Zypress_1.git'
            }
        }
        

        stage('Install Dependencies') {
            steps {
                bat 'npm ci'
            }
        }

        
        stage('bulding') {
            steps{
                echo 'Building the appication.'             
            }
        }

        stage('Run Cypress Tests') {
            steps {
                bat 'npx cypress run'
            }
        }

        
   
    }

   
}
