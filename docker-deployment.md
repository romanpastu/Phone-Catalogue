###### ** The react app comes shipped with nginx as a webserver

---

Front: https://hub.docker.com/r/romancc/phone-boot-front <br />
Back: https://hub.docker.com/r/romancc/phone-boot-back

Add both images to your docker using:

```
docker pull romancc/phone-boot-back
docker pull romancc/phone-boot-front
```

Once cloned, execute them as following:

```
docker run -p 8080:80 -d romancc/phone-boot-front
docker-run -p 1234:1234 -d romancc/phone-boot-back
```

The application will now be available in ```localhost:8080```


