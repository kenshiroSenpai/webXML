<?xml version="1.0" encoding="UTF-8"?>

<!--
    Document   : index.xsl
    Created on : 10 de abril de 2019, 13:35
    Author     : Kenshiro
    Description:
        Purpose of transformation follows.
-->

<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
    <xsl:output method="html"/>

    <!-- TODO customize transformation rules 
         syntax recommendation http://www.w3.org/TR/xslt 
    -->
    <xsl:template match="/">
        <html>
            <head>
                <title>Video game</title>
            </head>
            <body>
                <h1>Video game Collection</h1>
                <table border="2">
                    <tr bgcolor="#448cff">
                        <th>Title</th>
                        <th>Developer</th>
                        <th>Platform</th>
                        <th>Year</th>
                        <th>Price</th>
                    </tr>
                    <xsl:for-each select="videogame/game">
                        <tr>
                            <td>
                                <xsl:value-of select="title"/>
                            </td>
                            <td>
                                <xsl:value-of select="developer"/>
                            </td>
                            <td>
                                <xsl:value-of select="platform"/>
                            </td>
                            <td>
                                <xsl:value-of select="year"/>
                            </td>
                            <td>
                                <xsl:value-of select="price"/>
                            </td>
                        </tr>
                    </xsl:for-each>
                </table>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>
