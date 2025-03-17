pipeline {
    agent any

    environment {
        CI = 'true'
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/thangavel03/YourRepo.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm install'
                bat 'npx cypress install'
            }
        }

        stage('Debug Workspace') {
            steps {
                bat 'dir /s'
            }
        }

        stage('Run Cypress Tests') {
            steps {
                bat 'npx cypress run --browser chrome --headless --config video=false --spec "cypress/e2e/**/*.*"'
            }
        }
    }

    post {
        always {
            echo 'Test execution completed.'
            archiveArtifacts artifacts: '**/cypress/screenshots/**', fingerprint: true

            emailext(
                subject: "Cypress Test Report: Build #${env.BUILD_NUMBER}",
                body: """
                Jenkins Cypress Test Report

                - Job: ${env.JOB_NAME}
                - Build Number: ${env.BUILD_NUMBER}
                - Status: ${currentBuild.currentResult}

                Logs: ${env.BUILD_URL}
                """,
                to: 'thangavelra03@gmail.com'
            )
        }
    }
}
