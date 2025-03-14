pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                // Clone the GitHub repository
                git url: 'https://github.com/thangavel03/Login-Automation.git', branch: 'main'
            }
        }

        stage('Install Dependencies') {
            steps {
                script {
                    // Ensure Node.js and npm are installed
                    bat 'npm install'
                }
            }
        }

        stage('Run Cypress Tests') {
            steps {
                script {
                    // Execute Cypress tests
                    bat 'npx cypress run'
                }
            }
        }
    }

    post {
        always {
            // Save test results
            archiveArtifacts artifacts: 'cypress/screenshots/**/*', allowEmptyArchive: true
        }
    }
}
