puts "seeding data"


    User.create(first_name: "Zack", second_name: "James", username: "Zack_J", email: "zackj@gmail.com", password_confirmation: "12345james" )
    User.create(first_name: "Jane", second_name: "Kimani", username: "Jane_K", email: "janek@gmail.com", password_confirmation: "12345jane" )
    User.create(first_name: "Solomon", second_name: "King", username: "Solo_King", email: "solok@gmail.com", password_confirmation: "12345king" )

    Book.create(
        title: "Rich Dad Poor Dad", 
        author: "Zack"
        

    )