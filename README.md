# Data Engineering Project: Automated ETL Pipeline with Apache Airflow
<img width="952" alt="data flow dia" src="https://github.com/user-attachments/assets/f822c04e-c941-4a92-95d7-57b051a21091" />

In this project, I built and automate an ETL process that extracts current weather data from the Open Weather Map API, transforms it, and loads the csv results obtained into an AWS S3 bucket. The entire project runs on the AWS cloud platform and leverages Apache Airflow to orchestrate and schedule the workflows.

<img width="1362" alt="airflow functions" src="https://github.com/user-attachments/assets/71bd32cd-31cc-45be-a4ff-5067b92695f4" />

## Key Concepts

- **ETL Process**: 
  - **Extract**: Pull weather data from the Open Weather Map API.
  - **Transform**: Clean and prepare the data.
  - **Load**: Upload the transformed data into an AWS S3 bucket.
  
- **Apache Airflow**:
  - **DAG (Directed Acyclic Graph)**: Represents the workflow structure.
  - **Operators**: Tasks that define each step of the pipeline.
  - **Sensors**: Special operators that wait for a particular condition or event before proceeding.

- **AWS Cloud Platform**: 
  - Utilized AWS S3 for data storage.

## Project Workflow

1. **Environment Setup**  
   - Install Apache Airflow.
   - Configure AWS credentials and Openweathermap API key.

2. **Extract Data**  
   - Connect to the Open Weather Map API to fetch current weather data.

3. **Transform Data**  
   - Process and clean the data to match requirements.

4. **Load Data**  
   - Upload the transformed data into an S3 bucket on AWS.

5. **Schedule and Monitor the Workflow**  
   - Create an Airflow DAG to schedule the ETL process.
   - Use Airflow operators and sensors to automate and monitor each step.

## Installation and Setup

```bash
# Install Apache Airflow (using pip)
pip install apache-airflow

# Initialize the Airflow database
airflow db init

# Run the dag file
python weather_dag.py
