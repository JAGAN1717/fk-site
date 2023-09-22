import React from 'react'
import { Box, Grid, Stack } from '@mui/material'
import DownloadComponent from './DownloadComponent'
import LandingDownloadBanner from '../../../public/static/banners/DownloadBanner.png'

import Link from 'next/link'
import CustomImageContainer from '../CustomImageContainer'
import { imageNotFoundPlaceholder } from '../../utils/LocalImages'
import { useTranslation } from 'react-i18next'
import { CustomStackFullWidth } from '../../styled-components/CustomStyles.style'
import CustomContainer from '../container'

const DownloadSection = ({
    global,
    app_section_image,
    landing_page_links,
    app_section_small_image,
}) => {
    const appImge = true
    const { t } = useTranslation()
    return (
        <CustomContainer>
            <CustomStackFullWidth
                sx={{ marginBottom: '30px', marginTop: '30px' }}
            >
                <Grid container spacing={2} sx={{ my: 1 }} alignItems="center">
                    <Grid item xs={12} md={6} align="center">
                        <Stack
                            direction="row"
                            width="100%"
                            justifyContent="center"
                            sx={{ paddingInline: '10px' }}
                        >
                            <Stack>
                                <CustomImageContainer
                                    src={
                                        app_section_image
                                            ? `${global?.base_urls?.react_landing_page_images}/${app_section_image}`
                                            : imageNotFoundPlaceholder.src
                                    }
                                    height="471px"
                                    smHeight="325px"
                                    maxWidth="430px"
                                    objectFit="cover"
                                    alt={t('App View')}
                                />
                            </Stack>
                        </Stack>
                    </Grid>
                    <Grid item xs={12} md={6} align="center">
                        {landing_page_links && (
                            <DownloadComponent
                                className="download-component"
                                landing_page_links={landing_page_links}
                            />
                        )}
                    </Grid>
                </Grid>
            </CustomStackFullWidth>
        </CustomContainer>
    )
}

export default DownloadSection
