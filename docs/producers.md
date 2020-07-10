# Q|Hub for Admins

Q|Hub admins are **DevOps engineers**, **system administrators**, **scientists**, and **network architects** who are responsible for the critical infrastructure that data scientists and engineers need to thrive. Q|Hub is bundled with features that make installation easy while providing the ability to scale with your organization and data.

> The content below is particularly for Q|Hub producers and those looking to learn more about the Q|Hub architecture.

## **Why Q|Hub**

With Q|Hub, managing configurable data science environments and attaining seamless deployment with [**Github Actions**](https://github.com/marketplace/actions/deployment-action) become remarkably easy. Let's look at how you can customize Q|Hub for a data science architecture that meets  **your team's needs**.


## Installing Q|Hub

## Configuring Q|Hub

Q|Hub architecture and features allows you to:

- manage configurable data science environments
- handle multiple environments in a robust way
- have seamless deployment with github actions
- meet the needs of multiple teams and control permissions

Q|Hub is entirely controlled from a configuration file, which allows you to manage multiple environments and multiple teams, as well as their permissions and authorization in a robust way.

### The Configuration File

Q|Hub comes with configuration file templates for each of the cloud providers it currently supports: **Amazon Web Services (AWS)**, **Digital Ocean (DO)**, and **Google Cloud Platform (GCP)**. The templates can be found [**here**]('#').

### Autoscaling
- concerned with the day to day maintenance of each team's equipment 
    - autoscaling of computers (kubernetes and pods)
    
    
    Dask autoscaling with CPU & GPU workers
OAuth Integration (we are using github)
Staging & Production JupyterHub deploys
Staging & Production shell access 

## Q|Hub Architecture 
- they are concerned with Dask, Conda, Jhub, and kubernetes

### Digital Ocean Deployment

![QHub DO Architecture](../images/qhub_do_architecture.png)

### Google Cloud Platform Deployment

![QHub DO Architecture](../images/qhub_gcp_architecture.png)

### Amazon Web Services Deployment

[QHub AWS Architecture](#)

    
    
    
    
```{toctree}
:maxdepth: 2
:glob:

docs/aws/index
docs/do/index
docs/gcp/index
```