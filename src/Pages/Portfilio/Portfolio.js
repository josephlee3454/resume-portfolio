import { Grid, Tabs, Tab, 
    CardActionArea, CardMedia, Typography, 
    Card, CardContent, Grow, DialogContent, 
    DialogActions , Dialog, DialogTitle,}
    from '@material-ui/core';

import './Portfolio.css'
import React, {useState} from 'react'
import resumeData from '../../utils/resumeData'



const Portfolio = () => {
    
    const [tabValue, setTabValue] = useState("ALL");
    
    const [projectDialog, setProjectDialog] = useState(false);


    
    
    return (
        <Grid container className= " section pb_45 pt_45">
            <Grid item className= "section_title mb_30">
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
                        <Tab label={tag} value={tag} className={tabValue == 'All' ? 'customTabs_item active': 'customTabs_item'}></Tab>
                        
                    ))}

                </Tabs>
            </Grid>
            

            <Grid item xs={12}>
                <Grid container spacing={2} >
                    {resumeData.projects.map((project) => (

                        <>
                        {tabValue == project.tag || tabValue =="ALL" ? ( 

                            <Grid item>
                                <Grow in timeout={1000}>
                                    <Card className='CustomCard' onClick={() => (project)}>
                                        <CardActionArea>
                                            <CardMedia className='customCard_image' image={project.image} title={project.title}/>
                                                <CardContent>
                                                    <Typography className='customCard_title'>{project.title}</Typography>
                                                    <Typography variant='body2' className='customCard_description'>{project.caption}</Typography>
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



                    <Dialog open={projectDialog} onClose={()=>setProjectDialog(false)}>
                        <DialogTitle onClose={()=>setProjectDialog(false)}>
                            {projectDialog.title}
                        </DialogTitle>
                    <img src="" alt=""/>
                    <DialogContent>
                        {projectDialog.description}
                    </DialogContent>
                    <DialogActions>
                        {projectDialog?.links?.map(link => (
                            <a href={link.link} target="_blank">
                                {link.icon}
                            </a>
                       
                           ))}
                    </DialogActions>
                </Dialog>
        </Grid>
    )
}

export default Portfolio
