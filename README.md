# UaaAngular

## Instructions

- install an instance of uaa server on you machine 
- edit uaa.yaml to allow cors 
- edit oath-clients.xml to set the redirect from oauth


### uaa cors redirect

```yaml
cors:
 xhr:
   allowed:
     headers:
       - Accept
       - Authorization
       - Content-Type
       - X-Requested-With
     origin:
       - ^localhost$
       - ^.*\.localhost$
       - ^localhost:4200$
       - ^.*\.localhost:4200$
     uris:
       - ^/uaa/userinfo$
       - ^/uaa/login\.do$
       - ^/uaa/logout\.do$
     methods:
       - GET
       - OPTIONS
 default:
   allowed:
     headers:
       - Accept
       - Authorization
       - Content-Type
       - X-Requested-With
     origin:
       - ^localhost$
       - ^.*\.localhost$
       - ^localhost:4200$
       - ^.*\.localhost:4200$
     uris:
       - ^/uaa/userinfo$
       - ^/uaa/login\.do$
       - ^/uaa/logout\.do$
     methods:
       - GET
       - PUT
       - POST
       - DELETE
```


```xml 
...
<entry key="cf">
    <map>
        <entry key="authorized-grant-types" value="implicit,password,refresh_token" />
        <entry key="scope"
            value="uaa.user,cloud_controller.read,cloud_controller.write,openid,password.write,scim.userids,cloud_controller.admin,scim.read,scim.write" />
        <entry key="redirect-uri" value="http://localhost:4200/" />
        <entry key="authorities" value="uaa.none" />
        <entry key="autoapprove" value="true" />
    </map>
</entry>
...
```
