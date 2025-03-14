pipeline {
    agent any
    stages {
        stage('Install Dependencies') {
            steps {
                bat 'npm install'
                bat 'npx cypress install'
            }
        }
        stage('Run Cypress Tests') {
            steps {
                bat 'npx cypress run'
            }
        }
    }
}
