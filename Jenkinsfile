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
                bat 'npm ci'  // Clean install for consistent results
                bat 'npx cypress install'
            }
        }

        stage('Run Cypress Tests') {
            steps {
                catchError(buildResult: 'UNSTABLE', stageResult: 'UNSTABLE') {
                    bat 'npx cypress run --browser chrome --headless'
                }
            }
        }

        stage('Generate Report') {
            steps {
                bat 'npx mochawesome-merge "cypress/reports/*.json" -o mochareport.json'
                bat 'npx marge mochareport.json --reportDir cypress/reports/html'
            }
        }
    }

    post {
        always {
            echo 'Test execution completed.'

            // Archive screenshots and reports
            archiveArtifacts artifacts: '**/cypress/{screenshots,reports}/**', fingerprint: true

            // Publish HTML report to Jenkins
            publishHTML(target: [
                allowMissing: true,
                alwaysLinkToLastBuild: true,
                keepAll: true,
                reportDir: 'cypress/reports/html',
                reportFiles: 'index.html',
                reportName: 'Cypress Test Report'
            ])

            // Send email notification
            emailext(
                subject: "Cypress Test Report: Build #${env.BUILD_NUMBER}",
                body: """
                Jenkins Cypress Test Report

                - Job: ${env.JOB_NAME}
                - Build Number: ${env.BUILD_NUMBER}
                - Status: ${currentBuild.currentResult}

                View Full Report: ${env.BUILD_URL}/HTML_20Report/
                """,
                to: 'thangavelra03@gmail.com'
            )
        }
    }
}
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
                bat 'npm ci'  // Clean install for consistent results
                bat 'npx cypress install'
            }
        }

        stage('Run Cypress Tests') {
            steps {
                catchError(buildResult: 'UNSTABLE', stageResult: 'UNSTABLE') {
                    bat 'npx cypress run --browser chrome --headless'
                }
            }
        }

        stage('Generate Report') {
            steps {
                bat 'npx mochawesome-merge "cypress/reports/*.json" -o mochareport.json'
                bat 'npx marge mochareport.json --reportDir cypress/reports/html'
            }
        }
    }

    post {
        always {
            echo 'Test execution completed.'

            // Archive screenshots and reports
            archiveArtifacts artifacts: '**/cypress/{screenshots,reports}/**', fingerprint: true

            // Publish HTML report to Jenkins
            publishHTML(target: [
                allowMissing: true,
                alwaysLinkToLastBuild: true,
                keepAll: true,
                reportDir: 'cypress/reports/html',
                reportFiles: 'index.html',
                reportName: 'Cypress Test Report'
            ])

            // Send email notification
            emailext(
                subject: "Cypress Test Report: Build #${env.BUILD_NUMBER}",
                body: """
                Jenkins Cypress Test Report

                - Job: ${env.JOB_NAME}
                - Build Number: ${env.BUILD_NUMBER}
                - Status: ${currentBuild.currentResult}

                View Full Report: ${env.BUILD_URL}/HTML_20Report/
                """,
                to: 'thangavelra03@gmail.com'
            )
        }
    }
}
