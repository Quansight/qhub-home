# Q|Hub Documentation

![quansight_logo](https://avatars0.githubusercontent.com/u/34879953?v=4&s=100)

> Open source tooling for data science research, development, and deployment.

Q|Hub is an integrated data science environment designed and developed by scientists at Quansight. Q|Hub enables teams to build and maintain a cost effective and scalable compute/data science platform in the cloud. It provides an [**Infrastructure as Code**](https://en.wikipedia.org/wiki/Infrastructure_as_code) platform that streamlines the deployment of data science infrastructure for teams.

## Why We Created Q|Hub

Deploying and maintaining a scalable computational platform in the cloud is difficult. There is a critical need in organizations for a shared compute platform that is flexible, accessible, and scalable. JupyterHub is an excellent platform for shared computational environments and Dask enables researchers to scale computations beyond the limits of their local machines. However, deploying and maintaining a scalable cluster for teams with Dask on JupyterHub is a highly difficult task. Q|Hub is designed to solve this problem.

## Core Ideas

The core ideas that have guided the creation of QHub are:

+ **Open source**
+ **Cost-Effectiveness**
+ **Scalability**
+ **Robustness**
+ **Reproducibility**

Q|Hub provides teams with the following:

+ Easy installation and maintenance controlled by a single configuration file
+ Autoscaling JupyterHub installation deployed on the cloud provider of your choice
+ Option to choose from multiple compute instances, namely normal, high mem, gpu etc.
+ Autoscaling Dask compute clusters for big data using any instance type
+ Shell access and remote editing access (i.e. VSCode remote) through KubeSSH
+ Full linux style permissions allowing for different shared folders for different groups of users
+ Robust compute environment handling allowing both prebuilt and ad-hoc environment creation
+ Integrated video conferencing, using Jitsi

### Open Source

At the heart of QHub is the ability to serve the needs of teams with multiple development environments and provide this valuable service as open source.

### Cost-Effective

Cloud providers currently integrate well with kubernetes and provide autoscaling. Q|Hub takes advantage of this by allowing users to request on-demand dask clusters. These clusters can be scheduled on arbitrary compute resources, such as high memory, high CPU, and GPU instances in a cost effective manner using kubernetes node groups.

### Robust and Scalable

Q|Hub makes it easy to autoscale computations, authenticate multiple teams, and allow them to share their data and environments easily, resulting in a seamless and robust process of development and deployment within and among teams. Q|Hub is built on top of [**JupyterHub**](https://jupyterhub.readthedocs.io/en/stable/). What differentiates Q|Hub from its alternatives is its ability to scale. Q|Hub allows users to take full advantage of scalability through [**Dask**](https://dask.org/) in a robust way.

### Flexible and Reproducible

Q|Hub gives you the ability to select from available cloud providers: [**Amazon Web Services**](https://docs.aws.amazon.com/index.html?nc2=h_ql_doc_do_v), [**Digital Ocean**](https://try.digitalocean.com/developerbrand/?_dkitrig=Cloud), and [**Google Cloud Platform**](https://cloud.google.com/gcp/?utm_source=google&utm_medium=cpc&utm_campaign=na-US-all-en-dr-bkws-all-all-trial-b-dr-1009135&utm_content=text-ad-lpsitelinkCCexp2-any-DEV_c-CRE_113120492527-ADGP_Hybrid+%7C+AW+SEM+%7C+BKWS+%7C+US+%7C+en+%7C+BMM+~+Google+Cloud+Platform-KWID_43700009942847394-kwd-26415333781&utm_term=KW_%2Bgoogle%20%2Bcloud%20%2Bplatform-ST_%2Bgoogle+%2Bcloud+%2Bplatform&gclid=Cj0KCQjwgJv4BRCrARIsAB17JI7UQuHQaqsIKTM_mVWL86lIdpLPyMeIN6aJwPslBC8a-AToO56Fa4caAtsGEALw_wcB). Q|Hub handles the complexities associated with cloud deployments and allows you to focus on your development and research. As a Q|Hub user, you will define your environment and deployment through a configuration file. Q|Hub takes care of the rest, providing you with a smooth deployment process and maintenance. If you want to have full control over your deployment environment and customize it for your specific needs, Q|Hub enables you to do that, as well.

### Q|Hub Technology Stack

Q|Hub's technology stack is an integration of the following existing open source libraries:

+ [**Terraform**](https://www.terraform.io/intro/index.html), a tool for building , changing, and versioning infrastructure.
+[**Kubernetes**](https://kubernetes.io/docs/home/), a cloud-agnostic and open source orchestration system
+ [**Helm**](https://helm.sh/), a package manager for Kubernetes
+ [**JupyterHub**](https://jupyter.org/hub), a shareable compute platform for data science
+ [**JupyterLab**](https://jupyterlab.readthedocs.io/en/stable/)a web-based interactive development environment for Jupyter notebooks
+ [**Dask**](https://docs.dask.org/en/latest/), a scalable and flexible  library for parallel computing in Python
  + [Dask-Gateway](https://gateway.dask.org/), a secure, multi-tenant server for managing Dask clusters
+ [**GitHub Actions**](https://docs.github.com/en/actions), a tool to automate, customize, and execute your software development workflows in your GitHub repository,

as well as some newly created open source libraries: [**KubeSSH**](https://github.com/yuvipanda/kubessh), [**Jupyter-Videochat**](https://github.com/yuvipanda/jupyter-videochat), [**conda-store**](https://github.com/quansight/conda-store), and Conda-Docker.

### Q|Hub is for Teams

Q|Hub provides teams with features, such as shared file systems between users, configurable conda environments, and credential management for each user. It enables the deployment of a scalable cloud-agnostic compute environment suitable for teams.
Q|Hub empowers users not as familiar with cloud providers and associated tools with the ability to make infrastructure and development environment changes, such as adding a new package and making it available system-wide for all users. With such critical features, Q|Hub reduces their burden of maintaining multiple environments and configuration of cloud deployments and allows teams to focus on development.

+ If you are a data scientist, researcher, software engineer, etc.,
  + please see the documentation [**here**](#users).

+ If you are a DevOps engineer, system architect or admin, etc.,
  + please see the documentation [**here**](#producers).

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
