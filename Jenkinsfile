pipeline {
    agent any

    environment {
        CYPRESS_CACHE_FOLDER = "${WORKSPACE}/.cache/Cypress"
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/thangavel03/Login-Automation.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                script {
                    bat 'npm install'
                    bat 'npx cypress install'
                }
            }
        }

        stage('Run Cypress Tests') {
            steps {
                script {
                    bat 'npx cypress run'
                }
            }
        }
    }

    post {
        always {
            archiveArtifacts artifacts: 'cypress/screenshots/**/*', allowEmptyArchive: true
            junit 'cypress/results/**/*.xml'
        }
    }
}
