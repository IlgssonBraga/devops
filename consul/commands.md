# Server01

ip: 172.21.0.2

`consul agent -server -bootstrap-expect=3 -node=consulserver01 -bind=172.21.0.2 -data-dir=/var/lib/consul -config-dir=/etc/consul.d `

# Server02

ip: 172.21.0.4

`consul agent -server -bootstrap-expect=3 -node=consulserver02 -bind=172.21.0.4 -data-dir=/var/lib/consul -config-dir=/etc/consul.d -retry-join=172.21.0.2`

# Server03

ip: 172.21.0.3

`consul agent -server -bootstrap-expect=3 -node=consulserver03 -bind=172.21.0.3 -data-dir=/var/lib/consul -config-dir=/etc/consul.d -retry-join=172.21.0.2`

# Client01

ip: ip: 172.21.0.5

`consul agent -bind=172.22.0.4 -data-dir=/var/lib/consul -config-dir=/etc/consul.d -retry-join=172.22.0.6`

# Client02

172.21.0.6

`consul agent -bind=172.22.0.5 -data-dir=/var/lib/consul -config-dir=/etc/consul.d -retry-join=172.22.0.6`

# Working with files

`consul agent -config-dir=/etc/consul.d`

# Generate keygen

`consul keygen`
