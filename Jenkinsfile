pipeline {
    agent any

    environment {
        CI = 'true'
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/thangavel03/GreenKart_Automation/'
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm install'
                bat 'npx cypress install'
            }
        }

        stage('Run Cypress Tests') {
            steps {
                bat 'npx cypress run --browser chrome --headless --config video=false'
            }
        }
    }

    post {
        always {
            echo 'Test execution completed.'
            archiveArtifacts artifacts: '**/cypress/reports/mochawesome/**', fingerprint: true

            emailext(
                subject: "Cypress Test Report: Build #${env.BUILD_NUMBER}",
                body: """
                Jenkins Cypress Test Report

                - Job: ${env.JOB_NAME}
                - Build Number: ${env.BUILD_NUMBER}
                - Status: ${currentBuild.currentResult}

                Logs: ${env.BUILD_URL}
                """,
                attachLog: true,
                attachmentsPattern: '**/cypress/reports/mochawesome/*.html',
                to: 'thangavelra03@gmail.com'
            )
        }
    }
}
