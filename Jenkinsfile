pipeline {
    agent any

    environment {
        CI = 'true'
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/thangavel03/Login-Automation'
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

            // Archive Screenshots
            archiveArtifacts artifacts: '**/cypress/screenshots/**/*', fingerprint: true

            // Archive HTML Report
            archiveArtifacts artifacts: 'cypress/reports/html/**/*', fingerprint: true

            // Email the report
            emailext(
                subject: "Cypress Test Report: Build #${env.BUILD_NUMBER}",
                body: """
                Jenkins Cypress Test Report

                - Job: ${env.JOB_NAME}
                - Build Number: ${env.BUILD_NUMBER}
                - Status: ${currentBuild.currentResult}

                📊 [View Detailed Report](${env.BUILD_URL}artifact/cypress/reports/html/index.html)
                """,
                to: 'thangavelra03@gmail.com'
            )
        }
    }
}
