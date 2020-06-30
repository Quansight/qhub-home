# QHub Documentation

![](https://avatars0.githubusercontent.com/u/34879953?v=4&s=100)

> Open source tooling for data science research, development, and deployment.


Qhub is an [**Infrastructure as Code**](#What-is-Infrastructure-as-Code.) platform that simplifies the deployment of data science infrastructure for teams. Some of the core ideas that have led to the creation of QHub include open sourced, scalable, and reproducible development. For this, QHub is designed to provide a seamless and robust process of deployment and development. 

Built on top of [**JupyterHub**](https://jupyterhub.readthedocs.io/en/stable/), QHub takes some of the features of JupyterHub and significantly expands them in a robust way. QHub allows users to take full advantage of scalability through [**Dask**](https://dask.org/) and the flexibility to choose from multiple cloud providers. At the heart of QHub is the ability to serve the needs of large teams that want to usee multiple users and development environments. Qhub makes it easy to authenticate multiple groups and share within and among them. 


QHub provides you with a tool where you can select from available cloud providers: Amazon Web Services, Digital Ocean, and Google Cloud Platform. As a deployment environment, QHub handles many of the complexities assciated with cloud deployments and allows you to focus on your development and research. As a QHub user, you will define your environment and cloud deployments through a configuration file. QHub takes care of the rest, providing you with a smooth deployment process and maintenance. 


If you are a general user, please see the detailed QHub documentation [**here**](#docs-for-users).

If you are member of a DevOps team, please see a more technical documentation [**here**](#docs-for-devs). 

```{toctree}
:maxdepth: 2
:glob:

docs/aws/index
docs/do/index
docs/gcp/index
docs/faqs
```
