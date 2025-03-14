pipeline {
    agent any

    triggers {
        cron('H/30 * * * *') // Runs every 30 minutes
    }

    environment {
        CYPRESS_CACHE_FOLDER = "${WORKSPACE}/.cache/Cypress"
    }

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/thangavel03/Login-Automation'
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm install'
                bat 'npx cypress install' // Ensure Cypress binary is installed
            }
        }
    }

    post {
        always {
            archiveArtifacts artifacts: 'results/*.xml', fingerprint: true
            emailext (
                to: 'thangavelra2003@gmail.com',
                subject: "Cypress Test Report - ${currentBuild.fullDisplayName}",
                body: """
                Hello,

                The Cypress test run has completed.
                Status: ${currentBuild.currentResult}

                Check the Jenkins build here: ${env.BUILD_URL}
                """,
                attachLog: true,
                attachmentsPattern: 'results/*.xml'
            )
        }
    }
}
