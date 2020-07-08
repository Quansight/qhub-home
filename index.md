# QHub Documentation

![](https://avatars0.githubusercontent.com/u/34879953?v=4&s=100)

> Open source tooling for data science research, development, and deployment.



QHub is an integrated data science environment designed and developed by scientists at Quansight. QHub aims to enable teams to build and maintain a cost effective and scalable comput/data science platform in the cloud. It provides an [**Infrastructure as Code**](#What-is-Infrastructure-as-Code.) platform that simplifies the deployment of data science infrastructure for teams. 


## Why We Created QHub

While JupyterHub is an excellent platform for shared computational environments and Dask enables researchers to scale computations beyond the limits of their local machines. However, deploying and maintaining a scalable cluster for teams with Dask on JupyterHub is a highly difficult task. QHub is designed to solve this problem. 

QHub makes it easy to autoscale computations, authenticate multiple groups and allow them to share their data and environments easily, resulting in a seamless and robust process of development and deployment within and among teams. 


## Core Ideas

The core ideas that have led to the creation of QHub include:

+ **Open source** 
+ **Cost-Effectiveness**
+ **Scalability**
+ **Robustness**
+ **Reproducibility**


### Open Source

At the heart of QHub is the ability to serve the needs of large teams, with multiple users and development environments, and provide this valuable service as open source. 


### Cost-Effective 
TODO


### Robust and Scalable

Built on top of [**JupyterHub**](https://jupyterhub.readthedocs.io/en/stable/) and by robustly expanding the features of JupyterHub, QHub:

+ allows users to take full advantage of scalability through [**Dask**](https://dask.org/)
+ provides the flexibility to choose from multiple cloud providers


### Flexible and Reproducible

QHub gives you the ability to select from available cloud providers: Amazon Web Services, Digital Ocean, and Google Cloud Platform. As a deployment environment, QHub handles many of the complexities assciated with cloud deployments and allows you to focus on your development and research. As a QHub user, you will define your environment and cloud deployments through a configuration file. QHub takes care of the rest, providing you with a smooth deployment process and maintenance. If you want to have full control over your deployment environment and customize it for your specific needs, QHub enables you to do that, as well. 


### Documentation Designed for Different Needs


Documentation is an integral part of any technological tool. We have written the QHub Documentation aiming to answer the needs for different audiences with an effort to provide the right amount of details for each audience based on their role while using QHub.

+ If you are a general **user** (data scientist, researcher, software engineer, etc.), 
    + please see the documentation [**HERE**](#users).


+ If you are a **producer** (DevOps engineer, system architect or administrator, etc.), 
    + please see the documentation [**HERE**](#producers). 


```{toctree}
:maxdepth: 2
:glob:

docs/aws/index
docs/do/index
docs/gcp/index
docs/faqs
docs/users
docs/producers
```
