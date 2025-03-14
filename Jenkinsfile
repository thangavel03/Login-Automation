pipeline {
    agent any

    environment {
        CYPRESS_BASE_URL = 'http://localhost:8080' // Set your app's base URL
    }

    stages {

        stage('Checkout') {
            steps {
                // Clone the repository
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                script {
                    // Ensure Node.js and Cypress are installed
                    sh 'npm install'
                }
            }
        }

        stage('Run Cypress Tests') {
            steps {
                script {
                    // Execute Cypress tests
                    sh 'npx cypress run'
                }
            }

            post {
                always {
                    // Archive test results and videos/screenshots
                    archiveArtifacts artifacts: 'cypress/videos/**, cypress/screenshots/**', allowEmptyArchive: true
                    junit 'cypress/results/*.xml'
                }
            }
        }

    }

    post {
        success {
            echo 'Tests passed successfully!'
        }
        failure {
            echo 'Tests failed. Check reports for details.'
        }
    }
}
