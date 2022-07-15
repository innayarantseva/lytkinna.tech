Hey there! Let’s talk about how you can set up an environment to host your blog, site, app, service, you name it.

What we need to successfully place our work on the Internet:

1. A server which would host our page;
2. A domain name, so it is accessible by a beautiful and memorisable name rather than by 123.456.78.90;
3. A web server, which would response with the page when you’re landing on a particular domain name.

These are minimum requirements.

## Getting a server

I decided to use a rented virtual machine located in a cloud. I used Yandex.Cloud service for that. There are lots of possible options, like Digital Ocean, Amazon AWS, …, but I chose Yandex because of two things. One, and the most relevant — I could not pay for anything else with my Russian card. Once we are in Germany, I plan on trying a different service as well :) Second one — Yandex was used as an example in Practicum course I’ve taken recently, so I was a bit familiar with the service.

How I set up Yandex.Cloud cloud and a VM:

1. Go to [https://console.cloud.yandex.ru/](https://console.cloud.yandex.ru/). Here you should authorise with Yandex account (create one, if you don’t have one yet) and create a new digital cloud.
2. After that I created a new virtual machine — an extremely basic one, because all I have to do with it is just run an HTTP server serving my page/Docker with my page

    ![vm_settings](https://storage.yandexcloud.net/lytkinna-bucket/tech_diary_1/vm_settings.png)

3. I reserved a public IP so it won’t change after I restart my machine or anything else happens. In order to do that, I went to Virtual Private Cloud service, clicked “IP addresses” and clicked “reserve address”. After doing so, I was able to use it while creating my VM. PLEASE DO IT BEFORE STARTING TO CREATE A NEW VM BECAUSE IT DOESN’T SAVE ANY CHANGES AFTER REFRESHING THE PAGE!
4. And my server is ready to use!

## Using remote server

In order to do manipulations with my VM, I am connecting to it via SSH through the terminal:

```bash
ssh user_name@server_ip
```

where user_name — is my username on the VM (i have set it up during the creation), and server_ip — my reserved server IP for the VM.

And it’s done, I am on my VM now!

But it may be a good idea to set up it in the VSCode to be able to easily create and modify files.

For that I am using Remote SSH plugin for VSCode. I am clicking on that small icon in the bottom left corner:

![vscode_ssh_control](https://storage.yandexcloud.net/lytkinna-bucket/tech_diary_1/vscode_ssh_control.png)

And after that — “Connect to host”. If you have a host already added, all you have to do is to click on it. In order to add a new one click “Add new ssh host” and paste a command we’ve seen before:

![vscode_addingg_new_host](https://storage.yandexcloud.net/lytkinna-bucket/tech_diary_1/vscode_addingg_new_host.png)

![vscode_entering_ssh_command](https://storage.yandexcloud.net/lytkinna-bucket/tech_diary_1/vscode_entering_ssh_command.png)

You are all set up now! Click “Open” to open any directory from your VM, but escape opening the root directory — my VSCode refused to watch that amount of files and almost crashed… Instead of that, try open a single directory, and if you need another one, click “File” — “Add new folder to workspace”.

To be able to save any changes I introduced to the files on the remote machine I needed sudo. So I used a plugin “Save as Root”. After installing it all I have to do to save a file is to press Cmd-Shift-P and select “Save as Root” instead of pressing familiar Cmd-S.

## Running a Web server on a VM

I have used nginx in order to serve anything on my VM.

To install nginx and to create a configuration: [https://www.digitalocean.com/community/tutorials/how-to-install-nginx-on-ubuntu-20-04](https://www.digitalocean.com/community/tutorials/how-to-install-nginx-on-ubuntu-20-04)

I have encountered a problem that my nginx wouldn’t restart. I’ve used that solution: [https://stackoverflow.com/questions/35868976/nginx-service-failed-because-the-control-process-exited](https://stackoverflow.com/questions/35868976/nginx-service-failed-because-the-control-process-exited)

Getting a domain name

Set up SSL certificate

I have used Let’s encrypt, and have done pretty much everything like they say in their docs for ubuntu+nginx: [https://certbot.eff.org/instructions?ws=nginx&os=ubuntufocal](https://certbot.eff.org/instructions?ws=nginx&os=ubuntufocal)

I didn’t have `snapd` installed on my VM Ubuntu, so I ran

```bash
sudo apt-get install snapd
```

And after that I have done everything like they say. I chose to edit configuration by hands, so after getting a cert I created a file `/etc/nginx/ssl` :

```nginx
ssi on;
add_header Strict-Transport-Security "max-age=31536000;";
ssl_ciphers HIGH:!RC4:!aNULL:!eNULL:!MD5:!EXPORT:!EXP:!LOW:!SEED:!CAMELLIA:!IDEA:!PSK:!SRP:!SSLv2;
ssl_prefer_server_ciphers on;
ssl_protocols TLSv1 TLSv1.1 TLSv1.2;

ssl_certificate /etc/letsencrypt/live/my_domain/fullchain.pem;
ssl_certificate_key /etc/letsencrypt/live/my_domain/privkey.pem;
```

By doing so I am able to reuse this ssl configuration in any server file I want. It is especially useful in case you have created a cert for wildcard and want to re-use it for different subdomains:

```nginx
server {
	listen [::]:443 ssl http2 backlog=2048 ipv6only=off;
	include ssl;

	# and here goes the rest of your configuration
}
```

## Copying all the necessary site files

I have used a simple scp utility for now:

```bash
cd Projects/project_name
scp -r public user_name@domain_name:~/
```

And then I served them with nginx by changing the root to the new one:

```bash
root /home/user_name/public;
```

So cool! Now I feel like I could be a DevOps! Look how beautiful my site is!

![site](https://storage.yandexcloud.net/lytkinna-bucket/tech_diary_1/site.png)

That’s all for now, we’ll meet again in the next Tech Diary where we’ll try to set up a Docker for my site ;)
