import { Grid, Tabs, Tab, 
    CardActionArea, CardMedia, Typography, 
    Card, CardContent, Grow, DialogContent, 
    DialogActions , Dialog, DialogTitle}
    from '@material-ui/core';

import './Portfolio.css'
import React, {useState} from 'react'
import resumeData from '../../utils/resumeData'



const Portfolio = () => {
    
    const [tabValue, setTabValue] = useState("ALL");
    
    const [projectDialog, setProjectDialog] = useState(false);


    
    
    return (
        <Grid container spacing={3} className= " section pb_45 pt_45">
            <Grid item className= "section_title mb_20">
                <span></span>
                <h6 className="section_title_text">Portfolio</h6>
            </Grid>


            <Grid item xs={12}>
                <Tabs 
                value = {tabValue} 
                indicatorColor="white" 
                className='custom_tabs' 
                onChange={(event,newvalue) => setTabValue(newvalue)}>
                <Tab 
                label="ALL" 
                value="ALL" 
                className={
                    tabValue == 'All' ? 'customTabs_item active': 'customTabs_item'
                    } />


                    {[...new Set(resumeData.projects.map(item => item.tag))].map(tag=>(
                        <Tab label={tag} value={tag} className={tabValue == tag  ? 'customTabs_item active': 'customTabs_item'}></Tab>
                        
                    ))}

                </Tabs>
            </Grid>
            

            <Grid item xs={12}>
                <Grid container spacing={3} >
                    {resumeData.projects.map((project) => (

                        <>
                        {tabValue == project.tag || tabValue =="ALL" ? ( 

                            <Grid item xs={12} sm={6} md={4} >
                                <Grow in timeout={1000}>
                                    <Card className='CustomCard' onClick={() => setProjectDialog(project)}>
                                        <CardActionArea>
                                            <CardMedia className='customCard_image' image={project.image} title={project.title}/>
                                                <CardContent>
                                                    <Typography variant={"body2"} className='customCard_title'>{project.title}</Typography>
                                                    <Typography variant={ 'caption'} className='customCard_caption'>{project.caption}</Typography>
                                                </CardContent>
                                        </CardActionArea>
                                    </Card>
                                </Grow>
                            </Grid>
                        ):null}
                        </>
                    ))}
                </Grid>
                    </Grid>



                    <Dialog open={projectDialog} onClose={()=>setProjectDialog(false)} className="projectDialog" fullWidth>
                        <DialogTitle onClose={()=>setProjectDialog(false)}>
                            {projectDialog.title}
                        </DialogTitle>
                    <img src={projectDialog.image} alt="not " className='projectDialog_image'/>
                    <DialogContent>
                        <Typography className='projectDialog_description'>
                            
                            {projectDialog.description}

                        </Typography>
                    </DialogContent>
                    <DialogActions className='projectDialog_actions'>
                        {projectDialog?.links?.map(link => (
                            <a href={link.link} target="_blank" className="projectDialog_icon">
                                {link.icon}
                            </a>
                       
                           ))}
                    </DialogActions>
                </Dialog>
        </Grid>
    )
}

export default Portfolio
