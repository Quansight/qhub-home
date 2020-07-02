# QHub Documentation

![](https://avatars0.githubusercontent.com/u/34879953?v=4&s=100)

> Open source tooling for data science research, development, and deployment.


QHub is an integrated data science environment designed and developed by scientists. It provides an [**Infrastructure as Code**](#What-is-Infrastructure-as-Code.) platform that simplifies the deployment of data science infrastructure for teams. 


## Core Ideas

The core ideas that have led to the creation of QHub include achieving development that is:

+ **Open source** 
+ **Scalable**
+ **Robust**
+ **Reproducible**




### Open Source

At the heart of QHub is the ability to serve the needs of large teams, with multiple users and development environments, and provide this service as open source. QHub is designed to make it easy to authenticate multiple groups and allow them to share their data and environments easily, resulting in a seamless and robust process of development and deployment within and among teams. 


### Robustness and Scalability 

Built on top of [**JupyterHub**](https://jupyterhub.readthedocs.io/en/stable/) and by robustly expanding the features of JupyterHub, QHub:

+ allows users to take full advantage of scalability through [**Dask**](https://dask.org/). 
+ provides the flexibility to choose from multiple cloud providers. 


### Flexibility and Reproducibility

QHub gives you the ability to select from available cloud providers: Amazon Web Services, Digital Ocean, and Google Cloud Platform. As a deployment environment, QHub handles many of the complexities assciated with cloud deployments and allows you to focus on your development and research. As a QHub user, you will define your environment and cloud deployments through a configuration file. QHub takes care of the rest, providing you with a smooth deployment process and maintenance. If you want to have full control over your deployment environment and customize it for your specific needs, QHub enables you to do that, as well. 


+ If you are a general **user** (data scientist, researcher, softwaree engineer, etc.), 
    + please see the detailed QHub documentation [**HERE**](#docs-for-users).


+ If you are a **producer** (DevOps member, system architect or administrator, etc.), 
    + please see a more technical documentation [**HERE**](#docs-for-devs). 


```{toctree}
:maxdepth: 2
:glob:

docs/aws/index
docs/do/index
docs/gcp/index
docs/faqs
```
