# Q|Hub Administrators

Q|Hub administrators are **DevOps engineers**, **system administrators**, **scientists**, and **network architects** who are responsible for the critical infrastructure that data scientists and engineers need to thrive. Q|Hub is bundled with features that make installation easy while providing the ability to scale with your organization and data.

> The content below is for Q|Hub producers and those looking to learn more about the Q|Hub architecture.

## **Why QHub?**

With QHub, managing configurable data science environments and seamless deployment with [**Github Actions**](https://github.com/marketplace/actions/deployment-action) become remarkably easy. Let's look at how you can customize QHub for a data science architecture that meets  **your team's needs**. 
    


## Configuring QHub

- Manage configurable data science environments 
- seamless deployment with github actions
- have to manage many environments in a robust way
- have multiple teams --> concerned with permissions

QHub is entirely controlled from a configuration file, which allows you to manage multiple environments and multiple teams, as well as their permissions and authorization in a robust way. 


### The Configuration File

QHub comes with configuration file templates for each of the cloud providers it currently supports: **Amazon Web Services (AWS)**, **Digital Ocean (DO)**, and **Google Cloud Platform (GCP)**. The templates can be found [**here**]('#'). 

### Autoscaling
- concerned with the day to day maintenance of each team's equipment 
    - autoscaling of computers (kubernetes and pods)
    
    
    Dask autoscaling with CPU & GPU workers
OAuth Integration (we are using github)
Staging & Production JupyterHub deploys
Staging & Production shell access 



## QHub Architecture 
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