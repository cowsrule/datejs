
}

if (this.document)
{
    window.dateWrapper = dateWrapper;
}

if (!this.dateLibLoaded)
{
    if (this.document)
    {
        dateWrapper();
    }
}
